import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { EmptyStateCardProps } from "@/constants/interface";

const EmptyStateCard = ({
  emptyImage,
  emptyLink,
  emptyButton,
}: EmptyStateCardProps) => {
  return (
    <div className="flexCenter w-[100%] h-[260px] bg-white p-4 my-4 rounded">
      <div className='flex flex-col items-center gap-2'>
        <Image width={72} height={72} src={emptyImage} alt="empty_image" />
        <h6 className="text-xs">No Request yet</h6>
        <Link href={emptyLink}>
          <button className="w-[153px] h-[40px] rounded-md px-6 py-3 text-center font-medium text-white bg-blue-300 text-xs">
            {emptyButton}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyStateCard
