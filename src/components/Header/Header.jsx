import React from 'react'
import './Header.css'
import Photo from '../Photo/Photo'

export default function Header() {
  return (
    <div>

            <div className="headerFirst">
                <div className="firstTitle">
                    Medycyna i dermatologia estetyczna
                </div>
                <div className="secondtitle">
                    Klinika prowadzona przez studentki WUM
                </div>
                <Photo />
            </div>

    </div>
  )
}
