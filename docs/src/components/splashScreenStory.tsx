import { SplashScreen } from '@ui-kit-2022/components';

interface Props {
  showSplash: boolean;
}

export default function splashScreenStory(props: Props) {
  return <div>Hello World {props.showSplash ? <SplashScreen /> : null}</div>;
}
