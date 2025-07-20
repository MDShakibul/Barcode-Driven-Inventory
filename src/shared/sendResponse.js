
  const sendResponse = (res, { statusCode, success, message = null, data = null, meta }) => {
    const responseData = {
      statusCode,
      success,
      message,
      data,
      ...(meta && { meta }) // Only add `meta` if it exists
    };
  
    res.status(statusCode).json(responseData);
  };
  
  export default sendResponse;
  