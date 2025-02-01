import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o Bootstrap
import '../styles/globals.css'; // Outras folhas de estilo do seu projeto

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
