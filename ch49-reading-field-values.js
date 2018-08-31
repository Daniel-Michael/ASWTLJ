Enter dog or cat:<br>
<form onSubmit="checkPet();"><input type="text" id="whichPet">
  <input type="submit" value="Submit">
</form>

<script>
function checkPet() {
  if (document.getElementById("whichPet").value === "dog") {
    alert("Bow-wow!");
  }
  else {
    alert("Meow!");
  }
  window.close("mywindow");
}
</script>
