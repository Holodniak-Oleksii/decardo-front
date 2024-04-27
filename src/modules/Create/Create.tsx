import { ThreeDEditor } from "@/common/components/3d";
import { IModelLoaderProps } from "@/common/components/3d/types";
import { MODEL_FORMATS } from "@/common/constants";
import { TModelFormat } from "@/common/types";
import { ChangeEvent, useState } from "react";
import { Navigations, SubmitForm } from "./components";
import { dataURLtoFile } from "./helpers";
import { Container, Content, Form, ScreenShot, View, Wrapper } from "./styles";

const Create = () => {
  const [image, setImage] = useState<File | null>(null);
  console.log("image :", image);
  const [isCapture, setIsCapture] = useState(false);

  const [file, setFile] = useState<Omit<
    IModelLoaderProps,
    "onCaptureModel"
  > | null>(null);

  const handlerChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement | null;
    if (target) {
      if (!!target.value) {
        const format = target.value.match(/\.([^\.]+)$/)?.[1] as TModelFormat;

        if (!MODEL_FORMATS.includes(format)) {
          alert("Invalid format of model");
          return null;
        }

        if (target.files && target.files[0] && format) {
          setFile({
            url: URL.createObjectURL(target.files[0]),
            format,
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

  return (
    <Wrapper>
      <View>
        <Navigations
          handlerTakePhoto={() => setIsCapture(true)}
          disabled={!file}
        />
        {file ? (
          <ThreeDEditor
            {...file}
            isCapture={isCapture}
            onCaptureModel={onCapture}
          />
        ) : (
          <input
            type="file"
            onChange={handlerChangeFile}
            accept={"." + MODEL_FORMATS.join(", .")}
          />
        )}
      </View>
      <Container>
        <Content>
          <Form>
            <SubmitForm />
          </Form>
          <ScreenShot url={image ? URL.createObjectURL(image) : null} />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Create;
