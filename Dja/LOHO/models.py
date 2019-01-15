from django.db import models



# class Dog(models.Model):
#     name = models.CharField(max_length=40)
#     color = models.CharField(max_length=10)
#     age = models.IntegerField()
#     bark = models.CharField(max_length=100)
#
#
# class Cat(models.Model):
#     name = models.CharField(max_length=40)
#     color = models.CharField(max_length=10)
#     age = models.IntegerField()
#     eat = models.CharField(max_length=100)


# 基础类
class Animal(models.Model):
    name = models.CharField(max_length=40)
    color = models.CharField(max_length=10)
    age = models.IntegerField()

    class Meta: # 抽象化
        abstract = True


# 狗 模型类
class Dog(Animal):
    bark = models.CharField(max_length=100)

# 猫 模型类
class Cat(Animal):
    eat = models.CharField(max_length=100)



# 用户 模型类
class User(models.Model):
    # username = models.CharField(max_length=80)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=40)


