'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getCalendarDates(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const dates: (number | null)[] = [];

  for (let i = 0; i < startDay; i++) {
    dates.push(null);
  }

  for (let day = 1; day <= totalDays; day++) {
    dates.push(day);
  }

  while (dates.length % 7 !== 0) {
    dates.push(null);
  }

  return dates;
}

export default function EventsPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const handlePrev = () => {
    setCurrentMonth(prev => {
      if (prev === 0) {
        setCurrentYear(y => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentMonth(prev => {
      if (prev === 11) {
        setCurrentYear(y => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const dates = getCalendarDates(currentYear, currentMonth);
  const monthLabel = new Date(currentYear, currentMonth).toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li>about us</li>
          <li>committees</li>
          <li>events</li>
          <li>portfolio</li>
        </ul>
        <button className={styles.signupButton}>sign up</button>
      </nav>

      <div className={styles.monthHeader}>
        <span className={styles.arrow} onClick={handlePrev}>&lt;</span>
        <span className={styles.monthLabel}>{monthLabel}</span>
        <span className={styles.arrow} onClick={handleNext}>&gt;</span>
      </div>

      <div className={styles.daysRow}>
        {daysOfWeek.map(day => (
          <div className={styles.dayName} key={day}>{day}</div>
        ))}
      </div>

      <div className={styles.datesGrid}>
        {dates.map((date, idx) => (
          <div
            className={`${styles.dateCell} ${isToday(date ?? 0) ? styles.today : ''}`}
            key={idx}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}
