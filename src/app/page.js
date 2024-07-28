import assets from "@/assets";
import Header from "@/components/Header";
import AreaChart from "@/components/charts/AreaChart";
import BarChart from "@/components/charts/BarChart";
import DoughnutChart from "@/components/charts/DoughnutChart";
import Card from "@/components/common/Card";
import Image from "next/image";

const MID_SECTION_DATA = [
  {
    id: 1,
    img: assets.icons.rupeeIcon,
    title: "23,5000",
    subTitle: "Total Value of Missions"
  },
  {
    id: 2,
    img: assets.icons.creditCardUpload,
    title: "134",
    subTitle: "No. of Transactions"
  },
  {
    id: 3,
    img: assets.icons.creditCardDownload,
    title: "134",
    subTitle: "Total Amount Claimed"
  },
  {
    id: 4,
    img: assets.icons.breifCase,
    title: "23,5000",
    subTitle: "No. of Job leads"
  },
  {
    id: 5,
    img: assets.icons.doubleUserCheckIcon,
    title: "12",
    subTitle: "Missions Applications"
  },
  {
    id: 6,
    img: assets.icons.fileCheckIcon,
    title: "12",
    subTitle: "Missions Submissions"
  },
  {
    id: 7,
    img: assets.icons.giftIcon,
    title: "12",
    subTitle: "Giveaway Applications"
  },
  {
    id: 8,
    img: assets.icons.fileCheckIcon,
    title: "12",
    subTitle: "Giveaway Submissions"
  },
]

export default function Home() {
  let brandData = [
    {
      label: "Branded",
      value: 40,
      color: "#FD904B",
      cutout: "50%",
    },
    {
      label: "Non-branded",
      value: 60,
      color: "#334BFF",
      cutout: "50%",
    },
  ];
  let missionData = [
    {
      label: "Started",
      value: 20,
      color: "#FD904B",
      cutout: "50%",
    },
    {
      label: "Evaluating",
      value: 60,
      color: "#334BFF",
      cutout: "50%",
    },
    {
      label: "Completed",
      value: 20,
      color: "#67AB75 ",
      cutout: "50%",
    },
  ];
  return (
    <div className="w-full mr-3">
      <Header />
      <Card classes="p-5">
        <div className="flex items-center gap-4">
          <TopCard title="Total No. of Opportunities" subTitle="6.4 K" width="40%">
            <div className="w-full h-2 flex rounded-lg overflow-hidden mt-4">
              <div className="w-[60%] bg-[#FD904B] h-full"></div>
              <div className="w-[30%] bg-[#334BFF] h-full"></div>
              <div className="w-[10%] bg-[#67AB75] h-full"></div>
            </div>
            <div className="flex gap-3 w-full mt-3">
              <Card bordered classes="p-4 px-2" width="33%">
                <div className="w-4 h-4 bg-[#FD904B] mb-3 rounded-md"></div>
                <p className="text-lg font-medium">2.3 K</p>
                <p className="text-xs text-[#7A7A7A]">No. of Missions</p>
              </Card>
              <Card bordered classes="p-4 px-2" width="33%">
                <div className="w-4 h-4 bg-[#334BFF] mb-3 rounded-md"></div>
                <p className="text-lg font-medium">2.3 K</p>
                <p className="text-xs text-[#7A7A7A]">No. of Missions</p>
              </Card>
              <Card bordered classes="p-4 px-2" width="33%">
                <div className="w-4 h-4 bg-[#67AB75] mb-3 rounded-md"></div>
                <p className="text-lg font-medium">2.3 K</p>
                <p className="text-xs text-[#7A7A7A]">No. of Missions</p>
              </Card>
            </div>
          </TopCard>
          <TopCard title="Branded vs Non-Branded" subTitle="6.4 K" totalTxt width="30%" >
            <div className=" flex gap-4 items-center mt-3">
              <DoughnutChart data={brandData} />
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between text-xs text-[#767676] w-full">
                  <p> Branded</p>
                  <p>60%</p>
                </div>
                <div className="flex justify-between text-xs text-[#767676] w-full">
                  <p > Non-Branded</p>
                  <p >60%</p>
                </div>
              </div>
            </div>
          </TopCard>
          <TopCard title="Mission status" subTitle="6.4 K" totalTxt width="30%">
            <div className=" flex gap-4 items-center mt-3">
              <DoughnutChart data={missionData} />
              <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between items-center text-xs text-[#767676] w-full">
                  <div>
                    <p className="text-[#1F1F1F]">1K</p>
                    <p> Started</p>
                  </div>
                  <p>60%</p>
                </div>
                <div className="flex justify-between items-center text-xs text-[#767676] w-full">
                  <div>
                    <p className="text-[#1F1F1F]">3.9K</p>
                    <p > Evaluated</p>
                  </div>
                  <p >20%</p>
                </div>
                <div className="flex justify-between items-center text-xs text-[#767676] w-full">
                  <div>
                    <p className="text-[#1F1F1F]">1.1K</p>
                    <p > Completed</p>
                  </div>
                  <p >20%</p>
                </div>
              </div>
            </div>
          </TopCard>
        </div>
        <div className="flex flex-wrap gap-5 mt-7">
          {MID_SECTION_DATA.map((item) => <MidSectionCard key={item.id} img={item.img} title={item.title} subTitle={item.subTitle} />)}
        </div>

        <div className="mt-8 flex gap-5">
          <Card bordered classes="p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-lg">No. of Opportunities</p>
                <h1 className="text-sm text-[#666666] mt-2">Listed per day </h1>
              </div>
              <select className="border border-[#E8E8E8] rounded-lg h-10 text-xs p-1">
                <option>All Time</option>
              </select>
            </div>
            <div className="mt-10">
              <BarChart />
            </div>
          </Card>
          <Card bordered classes="p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-lg">No. of Missions</p>
                <h1 className="text-sm text-[#666666] mt-2">Evaluated per day </h1>
              </div>
              <select className="border border-[#E8E8E8] rounded-lg h-10 p-1 text-xs">
                <option>All Time</option>
              </select>
            </div>
            <div className="mt-10">
              <AreaChart />
            </div>
          </Card>
        </div>
      </Card >
    </div >
  );
}


const TopCard = ({ title, subTitle, totalTxt = false, children, width }) => {
  return (
    <Card bordered width={width} classes="p-5">
      <div className="flex justify-between">
        <div>
          <p className="text-[#666666] text-nowrap text-sm">{title}</p>
          <h1 className="text-xl font-semibold mt-1">{subTitle} {!!totalTxt && <span className="text-xs font-normal text-[#666666]">Total</span>} </h1>
        </div>
        <select className="border border-[#E8E8E8] rounded-lg h-10 text-xs p-1">
          <option>All Time</option>
        </select>
      </div>
      <div>
        {children}
      </div>
    </Card>
  )
}


const MidSectionCard = ({ img, title, subTitle }) => {
  return (
    <Card bordered classes="flex items-center gap-5 p-4" width="253px">
      <div className="h-10 w-10 bg-[#F2F2F2] flex justify-center items-center rounded-lg">
        <Image src={img} alt="/" className="h-5 w-5" />
      </div>
      <div>
        <h1 className="text-xl">{title}</h1>
        <p className="text-[#666666] text-xs text-nowrap">{subTitle}</p>
      </div>
    </Card>
  )
}