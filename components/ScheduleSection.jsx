'use client';

import { useState } from 'react';

const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const scheduleDataA = [
 {
      location: 'Pyramid Kids Zone, Vasai (W)',
      days: { friday: '6:00PM - 7:30PM', saturday: '6:00PM - 7:30PM' },
      instructor: 'Senpei. Tanmay Nair',
    },
    {
      location: 'B.K.S English School, Vasai (W)',
      days: { monday: '7:00PM - 8:30PAM', wednesday: '7:00PM - 8:30PM' },
      instructor: 'Senpei Alphonse Thomas',
    },
    {
      location: 'St. Peters English High School, Vasai (W)',
      days: { saturday: '11:30AM - 1:00PM', sunday: '11:30AM - 1:00PM' },
      instructor: 'GM. Dr. Biju Nair',
    },
    {
      location: 'St. Xaviers English School Umelman, Vasai (W)',
      days: { monday: '5:00PM - 6:30AM', wednesday: '5:00PM - 6:30AM' },
      instructor: 'GM. Dr. Biju Nair',
    },
    {
      location: 'Nazareth Primary, Vasai (W)',
      days: { tuesday: '4:30PM - 6:00PM', thursday: '4:30PM - 6:00PM' },
      instructor: 'GM. Dr. Biju Nair',
    },
    {
      location: 'St. Xaviers English School, Naigaon (W)',
      days: { saturday: '4:00PM - 5:30PM', sunday: '4:00PM - 5:30PM' },
      instructor: 'GM. Dr. Biju Nair',
    },
    {
      location: 'Shankar Mandir Umelman, Vasai (W)',
      days: { saturday: '5:30PM - 7:00PM', sunday: '5:30PM - 7:00PM' },
      instructor: 'Sensei Arjun Tharu',
    },
    {
      location: 'Sai Gagangiri Ganeshmandir Compound Umela Naigaon (W)',
      days: { saturday: '9:00AM - 10:30AM', sunday: '9:00AM - 10:30AM' },
      instructor: 'GM. Dr. Biju Nair',
    },
    {
      location: 'Thakur Bhagwanidevi Musafir Public school, Naigaon (E)',
      days: { saturday: '6:00PM - 7:30PM', sunday: '6:00PM - 7:30PM' },
      instructor: 'Senpei Shashwat Yadav',
 },
  {
      location: 'MSB school, Vasai (W)',
      days: { saturday: '3:30PM - 5:00PM', sunday: '9:30AM - 11:00AM' },
      instructor: 'Sensei Namrata Nair',
 },
  {
      location: 'Nazareth Secondary school, Vasai (W)',
      days: { friday: '4:30PM - 6:00PM', sunday: '4:30PM - 6:00PM' },
      instructor: 'GM Dr. Biju Nair',
 },
  {
      location: 'Nishkalanka school, Vasai (W)',
      days: { tuesday: '5:00PM - 6:30PM', thursday: '5:00PM - 6:30PM' },
      instructor:<>
      Senpei Mithilesh Vishwakarma / <br />
      Senpei Bhavik Avaghade</>
 },

];

const scheduleDataB = [
  {
      location: 'BKS school, Vasai (W)',
      days: { monday: '7:00PM - 8:30PM',  wednesday: '7:00AM - 8:30AM' },
      instructor: 'Dr.Biju Nair',
 },
  {
      location: 'GG College, Vasai (W)',
      days: { friday: '2:00PM - 3:30PM', saturday: '2:00PM - 3:30PM' },
      instructor: 'Dr. Biju Nair',
 },
  {
      location: 'Thakur school, Vasai (W)',
      days: { friday: '6:30PM - 8:00PM', saturday: '6:30PM - 8:00PM' },
      instructor: 'Dr.Biju Nair',
 },
];

const scheduleDataC = [
{
      location: 'Thakur Bhagwanidevi Musafir Public school, Naigoan (E)',
      days: { saturday: '5:00PM - 6:30PM', sunday: '5:00AM - 5:30AM' },
      instructor: 'Sensei Vikas Tiwari',
 },
  {
      location: 'Nazareth Secondary school, Vasai (W)',
      days: { friday: '4:30PM - 6:00PM', sunday: '4:30PM - 6:00PM' },
      instructor: 'GM Dr. Biju Nair',
 },
  {
      location: 'BKS, Vasai (W)',
      days: { tuesday: '5:00PM - 6:30PM', thursday: '5:00PM - 6:30PM' },
      instructor: 'Senpei Alphonse Thomas',
 },

];

function ScheduleTable({ programTitle, scheduleData }) {
  const [selectedDay, setSelectedDay] = useState('all');

  const filteredSchedule = scheduleData.filter((row) =>
    selectedDay === 'all' ? true : Object.keys(row.days).includes(selectedDay)
  );

  return (
    <section className="py-16 bg-white border-t border-gray-200" id={`${programTitle.toLowerCase()}-schedule`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 uppercase">
            {programTitle} <span className="text-red-600">Schedule</span>
          </h2>
          <p className="text-gray-600 mt-2">Filter schedule by day using the buttons below.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['all', ...weekdays].map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`capitalize px-4 py-2 rounded-full border transition-all text-sm md:text-base ${
                selectedDay === day
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {day === 'all' ? 'All Days' : day}
            </button>
          ))}
        </div>

        {filteredSchedule.length === 0 ? (
          <div className="text-center text-gray-500">No classes scheduled for this day.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left table-auto shadow-md border border-gray-200">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-4 text-sm md:text-base">Location</th>
                  <th className="p-4 text-sm md:text-base">Timings</th>
                  <th className="p-4 text-sm md:text-base">Instructor</th>
                </tr>
              </thead>
              <tbody>
                {filteredSchedule.map((row, idx) => {
                  const timingsToShow =
                    selectedDay === 'all'
                      ? Object.entries(row.days)
                      : [[selectedDay, row.days[selectedDay]]];

                  return (
                    <tr key={idx} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="p-4 font-semibold text-gray-800 min-w-[180px]">{row.location}</td>
                      <td className="p-4 space-y-1 min-w-[160px]">
                        {timingsToShow.map(([day, time]) => (
                          <div key={day}>
                            <span className="capitalize font-semibold text-gray-800">
  {day}:
</span>{''}
                            <span className="text-gray-700">{time}</span>
                          </div>
                        ))}
                      </td>
                      <td className="p-4 text-gray-700 min-w-[160px]">{row.instructor}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default function SchedulePage() {
  return (
    <div className="bg-gray-50">
      <header className="py-20 text-center bg-white border-b border-gray-200 px-4">
        <h1 className="text-5xl font-bold text-gray-800">
          Classes <span className="text-red-600">Schedule</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-600 text-lg">
          Below is the schedule for our regular training programs. For extra training sessions, contact your instructor.
        </p>
      </header>

      <div id="Karate-schedule">
        <ScheduleTable programTitle="Karate" scheduleData={scheduleDataA} />
      </div>

      <div id="Rifle-schedule">
        <ScheduleTable programTitle="Rifle" scheduleData={scheduleDataB} />
      </div>

      <div id="KickBoxing-schedule">
        <ScheduleTable programTitle="KickBoxing" scheduleData={scheduleDataC} />
      </div>
    </div>
  );
}
