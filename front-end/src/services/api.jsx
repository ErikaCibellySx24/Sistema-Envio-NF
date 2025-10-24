export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://localhost:3001/upload", {
    method: "POST",
    body: formData,
  });

  return await response.json();
};
process.env.EMAIL_USER
