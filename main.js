$('#htcss tbody').on('click', 'button', function() {
   $(this).closest('tr').remove();
})

$('#add').on('click', function() {
   //newskill is what is inside the input value. 0 is where the html element is. value is where we found value of the input.//
   const newSkill = $('#value')[0].value;
   // newrow is the way you want to display but there is a whole in the middle to which we add the template literal.
   const newRow = $(` <tr>
   <td><button class="btn btn-xs btn-danger">X</button></td>
   <td class="cas">${newSkill}</td>
</tr>`)
// it add the newrow to the tbody 
$('tbody').append(newRow)

  // console.log($('#value')[0].value);
   //console.log(newRow);
})
