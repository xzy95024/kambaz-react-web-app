import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { PiCrosshairDuotone } from "react-icons/pi";
import { IoBarChart } from "react-icons/io5";
import { TbSpeakerphone } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa6";
export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h3>Course Status</h3>
            <div className="d-flex">
                <div className="w-20">
                    <Button variant="secondary"  className="w-100  rounded-0 border border-dark text-nowrap ">
                        <MdDoNotDisturbAlt className="me-0 fs-5"/> Unpublish </Button></div>
                <div className="w-20">
                    <Button variant="success"  className="w-100 border border-dark rounded-0 me-2">
                        <FaCheckCircle className="me-2 fs-5"/> Publish </Button></div>
            </div>
            <br/>
            <Button variant="secondary" size="me" className="w-100 mt-1 text-start fixed-size">
                <BiImport className="me-2 fs-5" /> Import Existing Content
            </Button>

            <Button variant="secondary" size="me" className="w-100 mt-1 text-start fixed-size">
                <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
            </Button>

            <Button variant="secondary" size="me" className="w-100 mt-1 text-start fixed-size">
                <PiCrosshairDuotone className="me-2 fs-5" /> Choose Home Page
            </Button>

            <Button variant="secondary" size="me" className="w-100 mt-1 text-start fixed-size">
                <IoBarChart className="me-2 fs-5" /> View Course Stream
            </Button>

            <Button variant="secondary" size="me" className="w-100 mt-1 text-start fixed-size">
                <TbSpeakerphone className="me-2 fs-5" /> New Announcement
            </Button>

            <Button variant="secondary" size="me" className="w-100 mt-1 text-start fixed-size">
                <IoBarChart className="me-2 fs-5" /> New Analytics
            </Button>

            <Button variant="secondary" size="me" className="w-100 mt-1 text-start fixed-size">
                <FaRegBell className="me-2 fs-5" /> View Course Notifications
            </Button>

        </div>
    );
}