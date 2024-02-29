import {format} from 'date-fns';

import prismadb from "@/lib/prismadb";
import { SizesClient } from "./components/client";
import { SizeColumn } from "./components/columns";

const SizesPage = async ({
  params
}: {
  params: { storeid: string }
}) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeid: params.storeid
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedSizes: SizeColumn[] = sizes.map((size) => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: format(size.createdAt, "MMMM do, yyyy")
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;