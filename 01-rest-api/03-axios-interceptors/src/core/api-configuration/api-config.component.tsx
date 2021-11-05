import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import axios, { AxiosRequestConfig } from 'axios';
import CloseIcon from '@material-ui/icons/Close';

export const ApiConfig: React.FC = (props) => {
  const { children } = props;

  const [ready, setReady] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    const requestInterceptor = (config: AxiosRequestConfig) => ({
      ...config,
      baseURL: 'https://api.github.com',
      headers: {
        ...config.headers,
        Accept: 'application/json',
      },
    });

    axios.defaults.headers['Accept'] = 'application/json';

    const requestErrorInterceptor = (error) => Promise.reject(error);

    const requestInterceptorId = axios.interceptors.request.use(
      requestInterceptor,
      requestErrorInterceptor
    );

    const responseInterceptorId = axios.interceptors.response.use(
      (response) => Promise.resolve(response),
      (error) => {
        setError(error);
        return Promise.reject(error);
      }
    );

    setReady(true);

    return () => {
      setReady(false);
      axios.interceptors.request.eject(requestInterceptorId);
      axios.interceptors.response.eject(responseInterceptorId);
    };
  }, []);

  const handleClose = () => setError(null);

  return (
    <>
      {ready ? (
        <>
          {!!error && (
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={!!error}
              autoHideDuration={6000}
              onClose={handleClose}
              message="Note archived"
              action={
                <React.Fragment>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          )}
          {children}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
