
import express from 'express';
import cors from 'cors';

import globalErrorHandelar from './app/middlewares/globalErrorHandler.js';
import routers from './app/routes/index.js';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes
app.use('/api/v1/', routers);
//initially connect
/* app.get('/', (req, res , next) => {
  throw new Error("You have an error");
}) */


//global error handler
app.use(globalErrorHandelar);

//handle not found
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    messgae: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
