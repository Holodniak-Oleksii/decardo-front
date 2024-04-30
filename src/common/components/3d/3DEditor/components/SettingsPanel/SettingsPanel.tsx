import { FilterIcon } from "@/common/icons";
import { ColorInput } from "@/ui-liberty/inputs";
import { FC, useState } from "react";
import { ISettingsPanelProps } from "../../types";
import { LightSettingField } from "./components";
import {
  Absolute,
  Body,
  FilterButton,
  Head,
  Relative,
  Wrapper,
} from "./styles";

const SettingsPanel: FC<ISettingsPanelProps> = ({
  sceneSettings,
  onChangeSceneSettings,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Absolute>
      <Relative>
        <Wrapper>
          <Head>
            <FilterButton onClick={() => setIsOpen((prev) => !prev)}>
              <FilterIcon />
            </FilterButton>
          </Head>
          {isOpen && (
            <Body>
              <LightSettingField
                title="Ambient light"
                label="Intensity"
                value={sceneSettings.ambientLight.intensity}
                onChange={(value) =>
                  onChangeSceneSettings({
                    ...sceneSettings,
                    ambientLight: {
                      intensity: value,
                    },
                  })
                }
              />

              <LightSettingField
                title="Directional light"
                label="Intensity"
                value={sceneSettings.directionalLight.intensity}
                onChange={(value) =>
                  onChangeSceneSettings({
                    ...sceneSettings,
                    directionalLight: {
                      intensity: value,
                    },
                  })
                }
              />

              <LightSettingField
                title="Hemisphere light"
                label="Intensity"
                childrenLabel="Ground color"
                value={sceneSettings.hemisphereLight.intensity}
                onChange={(value) => {
                  onChangeSceneSettings({
                    ...sceneSettings,
                    hemisphereLight: {
                      ...sceneSettings.hemisphereLight,
                      intensity: value,
                    },
                  });
                }}
              >
                <ColorInput
                  value={sceneSettings.hemisphereLight.groundColor}
                  onChange={(groundColor) =>
                    onChangeSceneSettings({
                      ...sceneSettings,
                      hemisphereLight: {
                        ...sceneSettings.hemisphereLight,
                        groundColor,
                      },
                    })
                  }
                />
              </LightSettingField>
              <LightSettingField isOnlyOverlay title="Background color">
                <ColorInput
                  onChange={(backgroundColor) =>
                    onChangeSceneSettings({
                      ...sceneSettings,
                      backgroundColor,
                    })
                  }
                  value={sceneSettings.backgroundColor}
                />
              </LightSettingField>
            </Body>
          )}
        </Wrapper>
      </Relative>
    </Absolute>
  );
};

export default SettingsPanel;
