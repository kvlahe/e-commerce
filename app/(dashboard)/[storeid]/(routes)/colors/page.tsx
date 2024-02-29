import {format} from 'date-fns';

import prismadb from "@/lib/prismadb";
import { ColorsClient } from "./components/client";
import { ColorColumn } from "./components/columns";

const ColorsPage = async ({
  params
}: {
  params: { storeid: string }
}) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeid: params.storeid
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  const formattedColors: ColorColumn[] = colors.map((color) => ({
    id: color.id,
    name: color.name,
    value: color.value,
    createdAt: format(color.createdAt, "MMMM do, yyyy")
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;