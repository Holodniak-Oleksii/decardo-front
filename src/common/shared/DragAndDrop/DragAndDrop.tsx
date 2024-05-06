import React, { useRef, useState } from "react";
import { Container, ImagePreview } from "./styles";
import { IDragAndDropProps } from "./types";

const DragAndDrop: React.FC<IDragAndDropProps> = ({
  onChange,
  defaultValue,
  EmptyState,
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    defaultValue || null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleImageUpload = (file: File) => {
    onChange(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        setImagePreview(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImageSelect = () => {
    const file = fileInputRef.current?.files && fileInputRef.current?.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  return (
    <Container
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleImageSelect}
      />
      {imagePreview ? (
        <ImagePreview src={imagePreview} alt="Image Preview" />
      ) : (
        EmptyState || <p>Click or Drag & Drop Image Here</p>
      )}
    </Container>
  );
};

export default DragAndDrop;
