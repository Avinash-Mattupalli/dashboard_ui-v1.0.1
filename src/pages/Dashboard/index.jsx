import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Heading, Img, Input } from "../../components";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function DashboardPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Dashboard_UI</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex md:flex-col justify-between items-start w-full gap-5 p-10 sm:p-5 bg-gray-100">
        <Sidebar
          width="282px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="flex flex-col h-screen top-0 p-[50px] md:p-5 bg-black-900 !sticky overflow-auto rounded-[30px]"
        >
          <Heading size="lg" as="h1" className="mt-[9px] !text-white-A700">
            Board.
          </Heading>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "20px",
                color: "#ffffff",
                fontWeight: 400,
                fontSize: "18px",
              },
            }}
            rootStyles={{ ["&>ul"]: { gap: "40px" } }}
            className="flex flex-col items-start w-full mt-[59px]"
          >
            <MenuItem
              icon={
                <Img src="images/img_dashboard_icon.svg" alt="dashboardicon" className="self-end h-[18px] w-[18px]" />
              }
            >
              Dashboard
            </MenuItem>
            <MenuItem icon={<Img src="images/img_vector_white_a700.svg" alt="vector_one" className="h-[18px]" />}>
              Transactions
            </MenuItem>
            <MenuItem
              icon={
                <Img src="images/img_schedule_icon.svg" alt="scheduleicon" className="self-end h-[18px] w-[18px]" />
              }
            >
              Schedules
            </MenuItem>
            <MenuItem icon={<Img src="images/img_user_icon.svg" alt="usericon_one" className="h-[18px] w-[18px]" />}>
              Users
            </MenuItem>
            <MenuItem
              icon={
                <Img src="images/img_setting_icon.svg" alt="settingicon_one" className="self-start h-[17px] w-[17px]" />
              }
            >
              Settings
            </MenuItem>
          </Menu>
          {!collapsed ? (
            <Text as="p" className="mt-[396px] !text-white-A700 !font-montserrat">
              Help
            </Text>
          ) : null}
          {!collapsed ? (
            <Text as="p" className="mt-[17px] mb-2 !text-white-A700 !font-montserrat">
              Contact Us
            </Text>
          ) : null}
        </Sidebar>
        <div className="flex justify-center w-[75%] md:w-full mr-5 md:mr-0">
          <div className="flex flex-col w-full gap-[39px]">
            <div className="flex sm:flex-col justify-between gap-5">
              <Heading size="md" as="h1">
                Dashboard
              </Heading>
              <div className="flex justify-between items-center w-[29%] sm:w-full gap-5 sm:p-5">
                <Input
                  color="white_A700"
                  size="xs"
                  shape="round"
                  name="search"
                  placeholder={`Search...`}
                  value={searchBarValue2}
                  onChange={(e) => setSearchBarValue2(e)}
                  suffix={
                    searchBarValue2?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue2("")} height={12} width={12} fillColor="#848484ff" />
                    ) : (
                      <Img src="images/img_search_icon.svg" alt="Search icon" className="cursor-pointer" />
                    )
                  }
                  className="w-[63%] gap-[35px] text-gray-400"
                />
                <Img src="images/img_vector_black_900.svg" alt="vector_three" className="h-[20px]" />
                <Img src="images/img_image_1.png" alt="imageone_one" className="h-[30px] w-[30px] rounded-[50%]" />
              </div>
            </div>
            <div className="flex md:flex-col gap-9">
              <div className="flex flex-col items-start justify-center w-full p-[18px] md:p-5 bg-gray-300 rounded-[20px]">
                <Img src="images/img_vector_black_900_24x26.svg" alt="total_revenues" className="self-end h-[24px]" />
                <Text as="p" className="ml-1.5 md:ml-0 !text-black-900">
                  Total Revenues
                </Text>
                <Heading size="md" as="h2" className="mt-1.5 ml-1.5 md:ml-0 !font-opensans">
                  $2,129,430
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full p-[17px] md:p-5 bg-deep_orange-50 rounded-[20px]">
                <Img
                  src="images/img_vector_black_900_24x20.svg"
                  alt="vector_one"
                  className="self-end h-[24px] mt-0.5"
                />
                <Text as="p" className="ml-[7px] md:ml-0 !text-black-900">
                  Total Transactions
                </Text>
                <Heading size="md" as="h3" className="mt-1.5 ml-[7px] md:ml-0 !font-opensans">
                  1,520
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full p-[17px] md:p-5 bg-gray-300_01 rounded-[20px]">
                <Img
                  src="images/img_vector_black_900_24x23.svg"
                  alt="vector_one"
                  className="self-end h-[24px] w-[23px] mt-0.5"
                />
                <Text as="p" className="ml-[7px] md:ml-0 !text-black-900">
                  Total Likes
                </Text>
                <Heading size="md" as="h4" className="mt-1.5 ml-[7px] md:ml-0 !font-opensans">
                  9,721
                </Heading>
              </div>
              <div className="flex flex-col items-start w-full p-[19px] md:p-5 bg-gray-300_02 rounded-[20px]">
                <Img src="images/img_vector_black_900_24x36.svg" alt="vector_one" className="self-end h-[24px]" />
                <Text as="p" className="ml-1.5 md:ml-0 !text-black-900">
                  Total Users
                </Text>
                <Heading size="md" as="h5" className="mt-[5px] ml-1.5 md:ml-0 !font-opensans">
                  892
                </Heading>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-5 bg-white-A700 rounded-[20px]">
              <Heading size="s" as="h6" className="mt-1 ml-[15px] md:ml-0 z-[1]">
                Activities
              </Heading>
              <div className="mt-[-1px] ml-[15px] md:ml-0">
                <div className="flex flex-col gap-[29px]">
                  <div className="flex justify-between items-start gap-5">
                    <div className="flex justify-center items-center mt-2 gap-1.5">
                      <Text as="p" className="!font-montserrat">
                        May - June 2021
                      </Text>
                      <Img src="images/img_vector_gray_600.svg" alt="vector_five" className="h-[5px]" />
                    </div>
                    <div className="flex justify-center items-center w-[17%]">
                      <div className="self-end h-[10px] w-[10px] bg-red-200 rounded-[50%]" />
                      <Text as="p" className="ml-2.5 !text-black-900">
                        Guest
                      </Text>
                      <div className="self-end h-[10px] w-[10px] bg-light_green-300 rounded-[50%]" />
                      <Text as="p" className="ml-[11px] !text-black-900">
                        User
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="self-stretch">
                      <div>
                        <div className="flex md:flex-col justify-center items-center gap-3.5">
                          <Text as="p">500</Text>
                          <div className="self-end h-px bg-gray-200 flex-1" />
                        </div>
                        <div className="h-[142px] mt-[13px] relative">
                          <div className="flex flex-col w-[3%] gap-[22px] left-0 top-[6%] m-auto absolute">
                            <Text as="p">400</Text>
                            <Text as="p">300</Text>
                            <Text as="p">200</Text>
                          </div>
                          <div className="w-[96%] top-0 right-0 left-0 m-auto absolute">
                            <Img
                              src="images/img_line_chart_2.svg"
                              alt="linecharttwo"
                              className="self-stretch h-[95px] md:h-auto z-[1]"
                            />
                            <div className="flex flex-col mt-[-77px] gap-[38px]">
                              <div className="h-px bg-gray-200" />
                              <div className="h-px bg-gray-200" />
                              <div className="h-px bg-gray-200" />
                            </div>
                          </div>
                          <div className="flex flex-col justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Img src="images/img_line_chart_1.svg" alt="linechartone" className="h-[132px] z-[1]" />
                            <div className="flex md:flex-col justify-center items-center mt-[-6px] gap-3.5">
                              <Text as="p">100</Text>
                              <div className="self-end h-px bg-gray-200 flex-1" />
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col justify-center items-center mt-[22px] gap-[13px]">
                          <Text as="p">0</Text>
                          <div className="self-end h-px bg-gray-200 flex-1" />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-[70%] md:w-full mt-[-2px] gap-5 z-[1]">
                      <Text as="p" className="self-start">
                        Week 1
                      </Text>
                      <Text as="p" className="!font-opensans">
                        Week 2
                      </Text>
                      <Text as="p" className="!font-opensans">
                        Week 3
                      </Text>
                      <Text as="p" className="!font-opensans">
                        Week 4
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-center gap-10">
              <div className="w-full p-[31px] md:p-5 bg-white-A700 rounded-[20px]">
                <div className="flex flex-col items-center gap-[18px]">
                  <div className="flex self-stretch justify-between items-start gap-5">
                    <Heading size="s" as="h6">
                      Top products
                    </Heading>
                    <div className="flex justify-center items-start w-[28%] gap-2">
                      <div className="flex justify-center flex-1">
                        <Text size="xs" as="p" className="!font-montserrat">
                          May - June 2021
                        </Text>
                      </div>
                      <Img src="images/img_vector_gray_600.svg" alt="vector_seven" className="h-[5px] mt-1" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-[89%] md:w-full gap-5">
                    <Img src="images/img_pie_chart.svg" alt="piechart_one" className="h-[134px] w-[134px]" />
                    <div className="flex flex-col w-[48%] gap-[19px]">
                      <div className="flex w-[58%] md:w-full">
                        <div className="flex flex-col w-full gap-1">
                          <div className="flex items-center gap-2.5">
                            <div className="h-[11px] w-[11px] bg-green-200 rounded-[5px]" />
                            <Heading as="p">Basic Tees</Heading>
                          </div>
                          <Text size="xs" as="p" className="ml-[21px] md:ml-0">
                            55%
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex justify-between items-start gap-5 flex-1">
                          <div className="h-[11px] w-[11px] mt-[3px] bg-amber-200_01 rounded-[5px]" />
                          <div className="flex flex-col items-start gap-1">
                            <Heading as="p">Custom Short Pants</Heading>
                            <Text size="xs" as="p">
                              31%
                            </Text>
                          </div>
                        </div>
                        <div className="flex justify-between items-start mr-10 gap-5 flex-1">
                          <div className="h-[11px] w-[11px] mt-0.5 bg-red-A100 rounded-[5px]" />
                          <div className="flex flex-col items-start gap-[3px]">
                            <Heading as="p">Super Hoodies</Heading>
                            <Text size="xs" as="p">
                              14%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-[30px] md:p-5 bg-white-A700 rounded-[20px]">
                <div className="flex flex-col mb-1 gap-[23px]">
                  <div className="flex justify-between items-start gap-5">
                    <Heading size="s" as="h6">
                      Today’s schedule
                    </Heading>
                    <div className="flex justify-center items-center mt-[3px] gap-[7px]">
                      <a href="#">
                        <Text size="xs" as="p" className="!font-montserrat">
                          See All
                        </Text>
                      </a>
                      <Img src="images/img_vector_gray_600_8x5.svg" alt="vector_nine" className="self-end h-[8px]" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row sm:flex-col w-[61%] md:w-full gap-[13px]">
                    <div className="flex justify-between items-center gap-5 flex-1">
                      <div className="h-full w-[5px] bg-light_green-300" />
                      <div className="flex flex-col items-start gap-1">
                        <Heading as="p" className="!text-gray-700">
                          Meeting with suppliers from Kuta Bali
                        </Heading>
                        <Text size="xs" as="p" className="!text-gray-500">
                          14.00-15.00
                        </Text>
                        <Text size="xs" as="p" className="!text-gray-500">
                          at Sunset Road, Kuta, Bali{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-between items-start mr-6 gap-5 sm:mr-0 flex-1">
                      <div className="h-full w-[5px] bg-indigo-400" />
                      <div className="flex flex-col items-start mt-1 gap-[3px]">
                        <Heading as="p" className="!text-gray-700">
                          Check operation at Giga Factory 1
                        </Heading>
                        <Text size="xs" as="p" className="!text-gray-500">
                          18.00-20.00
                        </Text>
                        <Text size="xs" as="p" className="!text-gray-500">
                          at Central Jakarta{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
