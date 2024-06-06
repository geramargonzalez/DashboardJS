import { Montserrat} from "next/font/google";
import { Inter, Lusitana  } from 'next/font/google';

export const montserrat = Montserrat({subsets: ['latin'], weight:'400'});
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });