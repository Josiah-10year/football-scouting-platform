app.post('/upload', async (req, res) => {
    try {
      const fileUrl = await uploadFile(req.file);
      res.json({ fileUrl });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });