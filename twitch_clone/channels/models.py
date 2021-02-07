from django.db import models

# Create your models here.
class Channel(models.Model):
  name = models.CharField("Name", max_length=240)
  registrationDate = models.DateField("Registration Date", auto_now_add=True)

  def __str__(self):
    return self.name