from django.db import models

# 用户 模型类
class User(models.Model):
    # username = models.CharField(max_length=80)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=40)


