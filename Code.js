function myFunction(e) {
  return CardService.newCardBuilder()
  .setHeader(
    CardService.newCardHeader().setTitle("Card Header")
    )  
  .addSection(CardService.newCardSection()
              .addWidget(CardService.newTextInput().setFieldName("aaa").setValue("6"))
              .addWidget(CardService.newTextParagraph().setText("v 22"))              
            )                            
  .build()
}