function fetchBugDetails(bugId) {
    const dummyBugData = {
      bugId: "#123",
      title: "Bug Title 1",
      status: "Open",
      openedBy: "Tester 1",
      assignedTo: "Developer 1",
      timestamp: "2024-04-10 10:00 AM"
    };
    $('#bugId').val(dummyBugData.bugId);
    $('#title').val(dummyBugData.title);
    $('#status').val(dummyBugData.status);
    $('#openedBy').val(dummyBugData.openedBy);
    $('#assignedTo').val(dummyBugData.assignedTo);
    $('#timestamp').val(dummyBugData.timestamp);
  }
  $('#editBugForm').submit(function(event) {
    event.preventDefault();
    alert('Changes saved successfully!');
  });
  $(document).ready(function() {
    const bugId = '123'; 
    fetchBugDetails(bugId);
  });