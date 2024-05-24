// import { useCreateUser } from "@/api/UserApi";
import { AppState, Auth0Provider, User, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Auth0ProviderWithNavigate({ children }: Props) {
  const { getAccessTokenSilently } = useAuth0();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLINT_ID;
  const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const navigate = useNavigate();

  if (!domain || !clientId || !redirectUrl) {
    throw new Error("unable to initialise Auth");
  }

  const onRedirectCallback = async (appState?: AppState, user?: User) => {
    console.log(user);
    const token = await getAccessTokenSilently();
    console.log(token);
    navigate("/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      authorizationParams={{ redirect_uri: redirectUrl }}
      clientId={clientId}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
