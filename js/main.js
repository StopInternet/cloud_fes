window.onload = function mains(){
  //ボックスの位置調整
  var br_setting_1 = document.getElementById('br_1');
  var out = "<br>"
}
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialDate: '2025-03-22',
    editable: false, // enable draggable events
    selectable: false,
    aspectRatio: 1.8,
    headerToolbar: {
      left: '',
      center: 'title',
      right: 'resourceTimelineThreeDays,listWeek'
    },
    initialView: 'resourceTimelineThreeDays',
    views: {
      resourceTimelineThreeDays: {
        type: 'resourceTimeline',
        duration: { days: 2 },
        buttonText: '出演者タイムテーブル'
      }
    },
    resourceAreaHeaderContent: '出演者/グループ',
    resources: [
      //{ id: 'b', title: 'Auditorium B', eventColor: 'green' },
      { id: '1', title: 'DJ Gen', eventColor: 'red' },
      { id: '2', title: 'DJ Fei-Rune', eventColor: 'blue' },
      { id: '3', title: 'DJ Ugou', eventColor: 'Green' },
      { id: '4', title: 'DJ LisaFrank', eventColor: 'Orange' },
      { id: '5', title: 'DJ Yossy', eventColor: 'Red' },
      { id: '6', title: 'DJ yuu', eventColor: 'blue' },
      { id: '7', title: 'DJ yuuta', eventColor: 'Green' },
      { id: '8', title: 'LowTeen', eventColor: 'Orange' },
      { id: '9', title: 'Bar ORIGIN', eventColor: 'red' },
      { id: '10', title: 'Korone Bakery', eventColor: 'blue' },
      { id: '11', title: 'SEISO NO OWARI', eventColor: 'blue' },
    ],
    events: [
      { id: '1', resourceId: '1', start: '2025-03-22T13:00:00', end: '2025-03-22T14:00:00', title: 'DJ Gen' },
      { id: '2', resourceId: '2', start: '2025-03-22T20:00:00', end: '2025-03-22T21:00:00', title: 'DJ Fei-Rune' },
      { id: '8', resourceId: '8', start: '2025-03-22T22:00:00', end: '2025-03-22T23:00:00', title: 'Lowteen (特別営業日)' },
    ]
  });

  calendar.render();
});
