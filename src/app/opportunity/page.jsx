"use client";
import React from "react";
import Card from "@/components/common/Card";
import Header from "@/components/Header";
import Image from "next/image";
import assets from "@/assets";
import Table from "@/components/common/Table";

const Opportunity = () => {
  const COLS = [
    {
      id: "name",
      title: "Name",
      sorting: true,
      render: (rowData) => {
        return (
          <div className="flex gap-2 ">
            <Image src={rowData.icon} alt="/" />
            {rowData.name}
          </div>
        );
      },
    },
    {
      id: "missionId",
      title: "Mission ID",
      sorting: true,
      render: (rowData) => {
        return <span>{rowData.missionId}</span>;
      },
    },
    {
      id: "brand",
      title: "Brand",
      sorting: true,
      render: (rowData) => {
        return <span className="text-nowrap">{rowData.brand}</span>;
      },
    },
    {
      id: "start",
      title: "Start",
      sorting: true,
      render: (rowData) => {
        return <div className="text-nowrap">{rowData.start}</div>;
      },
    },
    {
      id: "end",
      title: "End",
      sorting: true,
      render: (rowData) => {
        return <span className="text-nowrap">{rowData.end}</span>;
      },
    },
    {
      id: "type",
      title: "Type",
      sorting: true,
      render: (rowData) => {
        return <span className="fs-12 mx-auto">{rowData?.type}</span>;
      },
    },
    {
      id: "openings",
      title: "Openings",
      sorting: true,
      render: (rowData) => {
        return <span>{rowData.openings}</span>;
      },
    },
  ];
  const ROWS = [
    {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "breate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "Create a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "dreate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "ereate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "freate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "greate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "hreate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "Create a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "Create a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Gujrat Tourism",
      start: "11/02/2022, 12:00 PM",
      end: "10/04/2023, 12:00 PM",
      type: "Internship",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: assets.images.snapChat,
    },
    {
      name: "Areate a Reel for Gujrat Tourism on Instagram",
      missionId: "982918279201920",
      brand: "Snapchat",
      start: "12/04/2023, 12:00 PM",
      end: "12/04/2023, 12:00 PM",
      type: "Giveaway",
      openings: 24,
      icon: assets.images.snapChat,
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
