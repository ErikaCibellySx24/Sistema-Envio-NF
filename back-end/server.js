import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "backend/uploads/" });

// 🔹 Rota para upload de arquivos PDF
app.post("/upload", upload.single("file"), (req, res) => {
  const { originalname, filename } = req.file;
  console.log(`Arquivo recebido: ${originalname} → ${filename}`);
  res.json({ message: "Upload realizado com sucesso!", file: filename });
});

// 🔹 Rota para checklist
app.get("/checklist", (req, res) => {
  res.json([
    "Nota Fiscal",
    "Certidões",
    "FGTS Digital",
    "Vale Transporte",
    "Vale Alimentação",
    "Cesta Básica"
  ]);
});

// 🔹 Rota de envio (simulada)
app.post("/enviar", (req, res) => {
  const { email, assunto, corpo } = req.body;
  console.log(`Simulando envio para ${email}`);
  res.json({ message: "E-mail enviado com sucesso (simulado)!" });
});

// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
