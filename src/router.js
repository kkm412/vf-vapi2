import { Router } from 'express';
import { customLLMHandler } from './handlers/custom-llm/index.js';

const router = Router();

// POST 요청 처리 (기존 코드)
router.post('/chat/completions', customLLMHandler.dmAPI);

// GET 요청 처리 (새로 추가)
router.get('/chat/completions', (req, res) => {
  res.send({ message: 'This endpoint is for POST requests.' });
});

export { router };
