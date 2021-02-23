function onEdit(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var cell = e.range;
  var row = cell.getRow();
  var column = cell.getColumn();
  var valueColumnA = sheet.getRange(row, 1).getValue();
  var valueColumnB = sheet.getRange(row, 2).getValue();
  var cellColumnC = sheet.getRange(row, 3);
  
  if (column < 3 && row > 1 && valueColumnA  !== "" && valueColumnB   !== "") 
    {
      var result = cellColumnC.setFormula
      (
        'A'+ row + '+B'+ row
      )
      .getValue();
      cellColumnC.setValue(result);
    }
  else if (column < 3 && row > 1 && valueColumnA  == "" || valueColumnB  == "" )
  {
  cellColumnC.setvalue("");
  }
}
