import { useCreateArtMutation, useProfileQuery } from "@/common/api";
import { ThreeDEditor } from "@/common/components/3d";
import { ISceneSettings } from "@/common/components/3d/types";
import { LINK_TEMPLATES, MODEL_FORMATS } from "@/common/constants";
import { PhotoIcon } from "@/common/icons";
import { useUserStore } from "@/common/store";
import {
  IArtRequestModel,
  IResponseError,
  IUser,
  TModelFormat,
} from "@/common/types";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { ChangeEvent, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Navigations, SubmitForm } from "./components";
import { dataURLtoFile } from "./helpers";
import {
  Container,
  Content,
  FormContainer,
  Message,
  MessageDescription,
  MessageTag,
  MessageTitle,
  Row,
  ScreenShot,
  Upload,
  View,
  Wrapper,
} from "./styles";
import { IArtFile, IArtFormFiled } from "./types";

const Create = () => {
  const [image, setImage] = useState<File | null>(null);
  const [isCapture, setIsCapture] = useState(false);
  const [art, setArt] = useState<IArtFile | null>(null);
  const [sceneSettings, setSceneSettings] = useState<ISceneSettings | null>(
    null
  );
  const { push } = useRouter();
  const user = useUserStore((state) => state.user);
  const methods = useForm<IArtFormFiled>({ mode: "onSubmit" });
  const {
    handleSubmit,
    formState: { isSubmitted },
  } = methods;

  const { mutateAsync } = useCreateArtMutation();
  const { refetch } = useProfileQuery();
  const { enqueueSnackbar } = useSnackbar();

  const handlerChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement | null;
    if (target) {
      if (!!target.value) {
        const format = target.value.match(/\.([^\.]+)$/)?.[1] as TModelFormat;

        if (!MODEL_FORMATS.includes(format)) {
          enqueueSnackbar("Invalid format of model", {
            variant: "error",
          });
          return null;
        }

        if (target.files && target.files[0] && format) {
          setArt({
            url: URL.createObjectURL(target.files[0]),
            format,
            file: target.files[0],
          });
        }
      }
    }
  };

  const onCapture = (img: string) => {
    const fileImage = dataURLtoFile(img, "screenshot.png");
    if (fileImage) {
      setImage(fileImage);
    }
    setIsCapture(false);
  };

  const onSubmit = async (data: IArtFormFiled) => {
    try {
      if (!art?.file || !image || !sceneSettings) {
        return;
      }
      const body: IArtRequestModel = {
        ...data,
        format: art.format,
        model: art.file,
        preview: image,
        settings: sceneSettings,
        owner: user.username,
      };
      const response = await mutateAsync(body);
      if (response.status === 200) {
        const user = response.result[0] as IUser;
        refetch();
        enqueueSnackbar("Success", {
          variant: "success",
        });
        push(LINK_TEMPLATES.PROFILE(user.username));
      }
    } catch (e) {
      const error = e as AxiosError<IResponseError>;
      if (error.response) {
        enqueueSnackbar(error.response?.data.message || "", {
          variant: "warning",
        });
      }
    }
  };

  const renderFormatTags = () => {
    return MODEL_FORMATS.map((item, id) => (
      <MessageTag key={id}>.{item}</MessageTag>
    ));
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...methods}>
        <View>
          <Navigations
            handlerTakePhoto={() => setIsCapture(true)}
            disabled={!art}
            handlerChangeFile={handlerChangeFile}
          />
          {art ? (
            <ThreeDEditor
              url={art.url}
              format={art.format}
              isCapture={isCapture}
              onCaptureModel={onCapture}
              onChangeSceneSettings={(settings) => setSceneSettings(settings)}
            />
          ) : (
            <Message isError={isSubmitted && !art}>
              <MessageTitle>Choose file</MessageTitle>
              <Row>{renderFormatTags()}</Row>
              <MessageDescription>
                Download the 3D model and take a photo for preview
              </MessageDescription>
              <Upload htmlFor="fileUpload">Upload</Upload>
              <input
                type="file"
                id="fileUpload"
                onChange={handlerChangeFile}
                hidden
                accept={"." + MODEL_FORMATS.join(", .")}
              />
            </Message>
          )}
        </View>
        <Container>
          <Content>
            <FormContainer>
              <SubmitForm />
            </FormContainer>
            <ScreenShot
              isError={isSubmitted && !image}
              url={image ? URL.createObjectURL(image) : null}
            >
              {!image && (
                <>
                  <Row>
                    <PhotoIcon />
                  </Row>
                  <MessageTitle>Take a photo</MessageTitle>
                  <MessageDescription>
                    Download the 3D model and take a photo for preview
                  </MessageDescription>
                </>
              )}
            </ScreenShot>
          </Content>
        </Container>
      </FormProvider>
    </Wrapper>
  );
};

export default Create;
