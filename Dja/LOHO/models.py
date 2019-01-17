from django.db import models

# 用户 模型类
class User(models.Model):
    # username = models.CharField(max_length=80)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=40)

# class img(models.Model):
#     productid = models.CharField(max_length=20)
#     producting = models.CharField(max_length=100)
#     produtlangcname = models.CharField(max_length=100)
class Goods(models.Model):
    # 商品ID
    productid = models.CharField(max_length=10)
    # 商品图片
    productimg = models.CharField(max_length=100)
    # 商品名称
    productname = models.CharField(max_length=100)
    # 商品长名称
    productlongname = models.CharField(max_length=200)
    # 是否精选
    isxf = models.IntegerField(default=0)
    # 是否买一送一
    pmdesc = models.IntegerField(default=0)
    # 规格
    specifics = models.CharField(max_length=100)
    # 价格
    price = models.DecimalField(max_digits=8, decimal_places=2)
    # 超市价格
    marketprice = models.DecimalField(max_digits=8, decimal_places=2)
    # 分类ID
    categoryid = models.IntegerField()
    # 子类ID
    childcid = models.IntegerField()
    # 子类名称
    childcidname = models.CharField(max_length=100)
    # 详情ID
    dealerid = models.CharField(max_length=100)
    # 库存
    storenums = models.IntegerField()
    # 销量
    productnum = models.IntegerField()

class Cart(models.Model):
    # 用户
    user = models.ForeignKey(User)

    # 商品
    goods = models.ForeignKey(Goods)

    # 额外信息 【手机: 版本、颜色、容量大小、数量...】
    # 商品数量
    number = models.IntegerField()
    # 是否选中
    isselect = models.BooleanField(default=True)