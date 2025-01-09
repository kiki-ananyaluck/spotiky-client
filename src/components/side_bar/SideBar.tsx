// SideBar.js
import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown} from 'antd';
import { IoIosAdd } from "react-icons/io";
import { BsCollectionFill } from "react-icons/bs";
import { PiMusicNotesPlusBold } from "react-icons/pi";
import Link from 'next/link';
import AdviseCard from './AdviseCard';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <div className="flex items-center">
        <PiMusicNotesPlusBold className="mr-2 w-6 h-6 text-[#afafaf]" />
        <Link href="/your-target-page" className='text-sm'>
          สร้างเพลย์ลิสต์ใหม่
        </Link>
      </div>
    ),
  },
];

const footer = ["กฎหมาย", "ศูนย์ความปลอดภัยและความเป็นส่วนตัว", "นโยบายความเป็นส่วนตัว", "คุ๊กกี้", "เกี่ยวกับโฆษณา", "การเข้าถึง"];

const SideBar = () => {
  return (
    <div className="bg-[#121212] w-2/5 p-4 h-screen flex flex-col justify-between">
      <div>
        <div className='flex justify-between'>
          <div className='flex gap-4'>
            <BsCollectionFill className='w-6 h-6 text-[#afafaf]' />
            <Link href="/your-target-page">
              <h3 className='text-[#afafaf]'>คอลเลกชันของคุณ</h3>
            </Link>
          </div>
          <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: false }}>
            <Button type="link" icon={<IoIosAdd className='w-8 h-8' />} shape="circle" />
          </Dropdown>
        </div>
        <AdviseCard text={{ title: 'สร้างเพลย์ลิสต์แรกของคุณ', description: 'ง่ายนิดเดียวเราช่วยคุณเอง', title_button: 'สร้างเพลย์ลิสต์' }} />
        <AdviseCard text={{ title: 'มาค้นหาพอตแคสต์เพื่อคุณจะได้ติดตามกันดีกว่า', description: 'เราจะคอยอัปเดทใหม่ๆ ให้คุณ', title_button: 'เลือกดูพอดแคสต์' }} />
      </div>
      <div className='flex gap-2 flex-wrap'>
        {
          footer.map((item, index) => {
            return <p className='text-[10px] text-[#afafaf]' key={index}>{item}</p>;
          })
        }
      </div>
    </div>
  );
};

export default SideBar;
