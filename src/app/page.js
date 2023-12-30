import Image from 'next/image';
import UserTemplate from './components/templates/UserTemplate';

export default function Home() {
  return <UserTemplate>
    <div className='grid grid-flow-row-dense grid-cols-3 '>
      <div>
        <div>chart total pemasukan</div>
      </div>
      <div>chart total pengeluaran</div>
      <div>chart apa nanti blom tau wkwk</div>
    </div>
  </UserTemplate>;
}
