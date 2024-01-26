import './globals.css';
import {
  sourceSerif4,
  firaMono,
  firaSans,
  rubikMonoOne,
  marckScript,
} from '../fonts';
import classNames from 'classnames';

export const metadata = {
  title: 'Jack Flannery',
  description: 'The Weblog of Jack Flannery',
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body
        className={classNames(
          sourceSerif4.variable,
          firaMono.variable,
          firaSans.variable,
          rubikMonoOne.variable,
          marckScript.variable
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
