'use client';

import React from 'react';
import { ChevronDown, Menu, Clock, BarChart2, Dumbbell } from 'lucide-react';

export default function WorkoutTracker() {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* iOS-style Status Bar */}
      <div className="ios-header">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-sm border-2 border-gray-400" />
            <span className="text-gray-600 text-sm">Friday, Nov 1</span>
          </div>
          <button className="ios-button-secondary">
            History
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Today's Workout</h1>
          <Menu className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Workout Description */}
      <div className="px-4 py-3 bg-white border-b border-gray-200">
        <p className="text-gray-600">
          Track your progress and maintain perfect form with guided instructions.
        </p>
      </div>

      {/* Day Selector */}
      <div className="px-4 py-3 bg-white border-b border-gray-200">
        <button className="flex items-center justify-between w-full">
          <span className="text-lg font-semibold">Thursday</span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Exercise List */}
      <div className="px-4 py-2">
        {[
          "Standing Military Press",
          "Barbell Rows",
          "Barbell Bicep Curl",
          "Tricep Dips",
          "Dumbbell Hammer Curl"
        ].map((exercise, index) => (
          <div key={index} className="ios-card">
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Dumbbell className="w-5 h-5 text-[#0A84FF]" />
                  <h3 className="font-semibold text-gray-900">{exercise}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <BarChart2 className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <button className="ios-button-secondary w-full">
                Log Set
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <button className="ios-button w-full">
          Complete Workout
        </button>
      </div>
    </div>
  );
}
