import Table from "@/module/Table/page";
import React from "react";
import snapChat from "../../../public/assets/snapchat-logo.png";
import Card from "@/components/common/Card";
import Header from "@/components/Header";
import Image from "next/image";
import assets from "@/assets";

const Opportunity = () => {
  const ROWS = [
    { title: "Name", sorting: true, id: "name" },
    { title: "Mission ID", sorting: false, id: "missionId" },
    { title: "Brand", sorting: true, id: "brand" },
    { title: "Start", sorting: true, id: "start" },
    { title: "End", sorting: true, id: "end" },
    { title: "Type", sorting: false, id: "type" },
    { title: "Openings", sorting: true, id: "openings" },
  ];
  const COLS = [
    {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "breate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "Create a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "dreate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "ereate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "freate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "greate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "hreate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "Create a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "Create a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: snapChat.src,
    },
    {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: snapChat.src,
    }, {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: snapChat.src,
    }, {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: snapChat.src,
    }, {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: snapChat.src,
    },
  ];
  return (
    <div>
      <Header showBtn />
      <Card classes="p-5 overflow-auto">
        <div>
          <div
            style={{
              display: "flex",
              gap: "2px",
              borderBottom: "1px solid #F2F2F2",
              paddingBottom: "16px",
              marginBottom: "16px",
              width: "90%",
            }}
          >
            <Image src={assets.icons.opportunity} />
            <h1 style={{ fontSize: "28px" }}>Opportunities</h1>
          </div>
          <Table rows={ROWS} cols={COLS} />
        </div>
      </Card>
    </div>
  );
};

export default Opportunity;
