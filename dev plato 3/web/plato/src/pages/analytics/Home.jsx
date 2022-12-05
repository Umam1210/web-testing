import Table from '../../components/analytics/MainTable';
import Tabs from '../../components/analytics/AnalyticsTabs';
import LineChart from '../../components/analytics/LineChart';
import RadarChart from '../../components/analytics/RadarChart';

export default function Home() {
  return (
    <>
      <div className="col-span-7">
        <Tabs />
        <Table />
      </div>
      <div className="col-span-5">
        <div className="flex h-80 w-full flex-col rounded-lg border bg-white p-5 shadow-md ">
          <h2 className="border-b-2 pb-3 font-semibold text-gray-600 ">View Chart</h2>
          <LineChart />
          {/* <RadarChart /> */}
        </div>
      </div>
    </>
  );
}
