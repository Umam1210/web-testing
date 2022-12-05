import Tabs from '../../components/finance/tabs';
import Table from '../../components/finance/table';
import Detail from '../../components/finance/detail';

export default function Home() {
  return (
    <>
      <div className="col-span-8">
        <Tabs />
        <Table />
      </div>
      <div className="sticky top-24 col-span-4 h-fit">
        <Detail />
      </div>
    </>
  );
}
