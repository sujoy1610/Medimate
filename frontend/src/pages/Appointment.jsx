import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const doc = doctors.find(doc => doc._id === docId);
    setDocInfo(doc);
    setSelectedDate('');
    setSelectedTime('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [docId, doctors]);

  const getNextSevenDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const allSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const getFilteredTimeSlots = () => {
    if (!selectedDate) return [];
    const selected = new Date(selectedDate);
    const now = new Date();

    if (selected.toDateString() === now.toDateString()) {
      return allSlots.filter(time => {
        const [slotHour, modifier] = time.split(' ');
        let [hours, minutes] = slotHour.split(':').map(Number);
        if (modifier === 'PM' && hours !== 12) hours += 12;
        const slotTime = new Date();
        slotTime.setHours(hours, minutes, 0, 0);
        return slotTime.getTime() > now.getTime();
      });
    }
    return allSlots;
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Appointment Confirmation", 20, 20);
    doc.setFontSize(12);
    doc.text(`Doctor: ${docInfo.name}`, 20, 40);
    doc.text(`Speciality: ${docInfo.speciality}`, 20, 50);
    doc.text(`Date: ${selectedDate}`, 20, 60);
    doc.text(`Time: ${selectedTime}`, 20, 70);
    doc.text(`Fees: ₹${docInfo.fees}`, 20, 80);
    doc.save("appointment_confirmation.pdf");
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select date and time slot');
      return;
    }
    toast.success('Appointment booked successfully!');
    generatePDF();
    navigate('/my-appointments');
  };

  const relatedDoctors = docInfo
    ? doctors.filter(doc => doc.speciality === docInfo.speciality && doc._id !== docInfo._id)
    : [];

  if (!docInfo) {
    return <div className="text-center text-red-500 py-10">Doctor not found.</div>;
  }

  return (
    <div className="px-6 md:px-12 lg:px-24 py-10 space-y-10">
      {/* Doctor Info */}
      <div className="flex flex-col md:flex-row items-start gap-10 bg-gray-200 shadow-lg rounded-xl p-6">
        <div className="flex-shrink-0">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-48 h-48 object-cover rounded-full border-4 border-white bg-blue-400"
          />
        </div>
        <div className="flex-1 space-y-5">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-blue-700">{docInfo.name}</p>
            <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="text-gray-600 text-base">{docInfo.degree} • {docInfo.speciality}</p>
            <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full font-medium">
              {docInfo.experience} Experience
            </button>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              About <img src={assets.info_icon} alt="Info" className="w-4 h-4" />
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">{docInfo.about}</p>
          </div>
          <p className="text-sm text-gray-800 font-semibold">Consultation Fees: ₹{docInfo.fees}</p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Choose Your Slot</h2>
        <div className="space-y-4">
          {/* Date Selection */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">Select Date:</p>
            <div className="flex flex-wrap gap-4">
              {getNextSevenDays().map((date, index) => {
                const strDate = date.toDateString();
                return (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm border ${
                      selectedDate === strDate
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                    }`}
                    onClick={() => setSelectedDate(strDate)}
                  >
                    {strDate}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Slot Selection */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">Select Time:</p>
            <div className="flex gap-4 flex-wrap">
              {getFilteredTimeSlots().length === 0 ? (
                <p className="text-gray-500 text-sm">No available slots</p>
              ) : (
                getFilteredTimeSlots().map((time, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm border ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleBooking}
          className="mt-6 w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </div>

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <div className="py-10">
          <h3 className="text-xl font-bold text-blue-700 mb-6">Related Doctors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedDoctors.map((doc) => (
              <div
                key={doc._id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => {
                  navigate(`/appointment/${doc._id}`);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
              >
                <img src={doc.image} alt={doc.name} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <p className="font-semibold text-gray-800">{doc.name}</p>
                  <p className="text-sm text-gray-500">{doc.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
