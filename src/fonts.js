import {
  Source_Serif_4,
  Fira_Mono,
  Fira_Sans,
  Rubik_Mono_One,
  Marck_Script,
} from 'next/font/google';

export const firaMono = Fira_Mono({
  variable: '--font-fira-mono',
  weight: '400',
  subsets: ['latin'],
});

export const marckScript = Marck_Script({
  variable: '--font-marck-script',
  weight: '400',
  subsets: ['latin'],
});

export const rubikMonoOne = Rubik_Mono_One({
  variable: '--font-rubik-mono-one',
  weight: '400',
  subsets: ['latin'],
});

export const sourceSerif4 = Source_Serif_4({
  variable: '--font-source-serif-4',
  weight: '400',
  subsets: ['latin'],
});

export const firaSans = Fira_Sans({
  variable: '--font-fira-sans',
  weight: '700',
  subsets: ['latin'],
});
