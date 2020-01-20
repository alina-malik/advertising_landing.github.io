$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо, ваша заявка принята!\n\rВ ближайшее время c вами свяжется представитель нашей компании, используя оставленные вами контактные данные.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});