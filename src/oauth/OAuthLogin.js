import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import useOAuthLogin from './useOAuthLogin';
import { setTokenAndUserInfoAsync } from '../redux/oauthSlice';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

/** 
 * Shows a login button.
 * When this button is clicked, the OAuth protocol flow is handled
 * by the `useOAuthLogin` hook.
 * 
 * @exports OAuthLogin
 */
export default function OAuthLogin() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const oauthApp = useSelector((state) => state.oauth.oauthApp);

  const onParamsRefreshed = (oauthParams) => {
    if (oauthParams.error) {
      // TODO: Catch error
      throw new Error(oauthParams.error);
    } else {
      dispatch(setTokenAndUserInfoAsync(oauthParams));
    }
  };

  const [handleLogin] = useOAuthLogin(oauthApp, onParamsRefreshed);

  return (
    <div className={classes.root}>
      <Grid
        container
        justify='flex-end'
        alignItems='center'
        spacing={1}
        style={{ flexGrow: 1 }}
      >
        <Grid item>
          <Button color='inherit' variant='outlined' onClick={handleLogin}>
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}