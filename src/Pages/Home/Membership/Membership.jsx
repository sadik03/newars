import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { FaCheck } from "react-icons/fa"; // Import check icon from FontAwesome
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../../Components/Container/Container";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import Reavel from "../../../Components/Reveal/Reavel";

const memberships = [
  {
    title: "Basic Membership",
    description: "Gain full access to our core training facilities and group sessions designed to improve your fitness and skill level.",
    duration: "3 Month Plan",
    price: "4000",
    admissionfee: "2000",
    benefits: [
      "Access to group training sessions",
      "Access to standard fitness equipment",
      "Weekly fitness assessments and tracking",
      "Member discounts on selected sports gear and merchandise",
    ],
    selected: true, // Mark as selected for demo purposes
  },
  {
    title: "Pro Membership",
    description: "Elevate your training with enhanced access, priority bookings, and specialized programs tailored to your performance goals.",
    duration: "6-Month Plan",
    price: "4000/month",
    admissionfee: "2000",
    benefits: [
      "Includes all Basic Membership perks",
      "Priority booking for sports courts and facilities",
      "Access to advanced training programs",
      "Exclusive workshops and events",
    ],
    selected: false,
  },
  {
    title: "Elite Membership",
    description: "Designed for high-performance athletes, offering a fully personalized experience with one-on-one coaching and custom plans.",
    duration: "12-Month Plan",
    price: "4000/month",
    admissionfee: "2000",
    benefits: [
      "Includes all Pro Membership perks",
      "Personalized one-on-one coaching sessions",
      "Customized nutrition and fitness plans",
      "Exclusive access to elite facilities and private areas",
    ],
    selected: false,
  },
];

const Membership = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleJoinNow = (membership) => {
    // Navigate to the payment page with the membership details as state
    navigate("/MembershipPayment", {
      state: {
        membershipType: membership.title,
        admissionfee: membership.admissionfee,
        price: membership.price,
      },
    });
  };

  return (
    <div className="dark:bg-gray-700 bg-[#68a9d3] pb-10 lg:pb-20 text-justify" id="membership">
      <SectionHeader heading={"Membership"}></SectionHeader>
      <Container>
        <div className="text-center">
          <Reavel>
            <p className="dark:text-white text-slate-700 mb-6">
              Join ARS Kreedashala and unlock a world of opportunities to enhance your athletic skills. Whether you're a beginner or an elite athlete, we have a membership plan that suits your needs. Choose from our Basic, Pro, or Elite memberships, each offering unique benefits to help you reach your full potential.
            </p>
          </Reavel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {memberships.map((membership, index) => (
            <FadeInAnimation key={index}>
              <div
                className={`membership-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition duration-500 transform hover:scale-105 hover:shadow-xl`}
              >
                <h3 className="text-2xl font-bold mb-2 dark:text-white text-gray-900">{membership.title}</h3>
                <p className="font-bold text-gray-800 dark:text-white mb-2">{membership.duration}</p>

                <ul className="text-left list-none space-y-2 mb-6">
                  {membership.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                      <FaCheck className="text-stone-600 mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition"
                  onClick={() => handleJoinNow(membership)}
                >
                  Join Now
                </button>
              </div>
            </FadeInAnimation>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Membership;
