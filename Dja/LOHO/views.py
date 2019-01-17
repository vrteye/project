from django.http import HttpRequest, HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render, redirect


# HttpRequest
from LOHO.models import User

def gettest(request):

    print(request.GET)
    print(request.GET.get('name'))
    print(request.GET.get('sex'))
    print(request.GET.get('haha', '你是开玩笑的吧?'))

    return HttpResponse('GET请求')


def postview(request):
    return render(request, 'postview.html')


def posttest(request):
    print(request.POST)
    print(request.POST.get('user'))

    response = HttpResponse('POST请求')

    return response


def redirecttest(request):
    # return HttpResponseRedirect('/mt/')
    return redirect('mt:index')


def jsontest(request):
    student = {
        'name': '张三',
        'age': 18,
        'score': 90
    }
    return JsonResponse(student)




###### 会话技术
def index(request):

    # 你是谁?
    # 状态保持 [获取cookie]
    phone = request.COOKIES.get('phone')
    print(phone)


    return render(request, 'index.html', context={'phone':phone})

def zhuce(request):
    if request.method == 'GET': # 获取注册页面
        return render(request, 'zhuce.html')
    elif request.method == 'POST':  # 注册操作
        # 一定要检查，数据能从客户端传输到服务端
        # print(request.POST)

        # 将数据存储到数据库 (建模，迁移操作)
        user = User()
        user.phone = request.POST.get('phone')
        user.password = request.POST.get('password')
        # user.phone = request.POST.get('phone')
        user.save()

        # 状态保持 [设置cookie]
        status = 200
        response = JsonResponse({'status': status})
        response.set_cookie('phone', user.phone)


        return response

def logout(request):
    response = redirect('mt:index')
    response.delete_cookie('phone')
    return response


def denglu(request):
    if request.method == 'GET': # 获取登录页面
        return render(request, 'denglu.html')
    elif request.method == 'POST':  # 登录操作
        # 一定要检查，数据能从客户端传输到服务端
        print(request.POST)

        # 和数据库中的数据对比，假如一致: 成功;   否则: 失败;
        phone = request.POST.get('phone')
        password = request.POST.get('password')

        users = User.objects.filter(phone=phone).filter(password=password)
        if users.count():   # 成功
            # 重定向到首页
            response = redirect('mt:index')
            # 状态保持 【设置cookie】
            response = redirect('mt:index')
            response.set_cookie('phone', phone, max_age=(60*60)*24*2)

            return response

        else:   # 失败(用户名或密码错误)
            return render(request, 'denglu.html', context={'err':'用户名或密码错误'})


# def denglu(request):
#     return render(request, 'denglu.html')



# def zhuce(request):
#     if request.method == "GET":
#         return render(request, 'zhuce.html')
#     if request .method == "POST":
#         phone = request.POST['phone']
#         password = request.POST['password']
#         try:
#             user = User(phone=phone, password=password)
#             user.save()
#             status = 200  # 返回注册成功的编号
#         except:
#             status = 100  # 返回注册失败的编号
#         return JsonResponse({'status': status})
    #


def mycart(request):
    return render(request, 'mycart.html')


def detail(request):
    return render(request, 'detail.html')


def detail2(request):
    return render(request, 'detail2.html')


def detail3(request):
    return render(request, 'detail3.html')


def detail4(request):
    return render(request, 'detail4.html')


def goods(request):
    return render(request, 'goods.html')