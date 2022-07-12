
def s(_numberStr):
    p = []
    num = len(_numberStr)
    for i in range(num):
        for j in range(i,num):
                p.append(_numberStr[i:j+1])
    # print(p)
    return p

def mul(_strnum):
    mul = 1
    for x in _strnum:
            mul=mul*int(x)
    return mul

def is_colorful(_numberStr):
    result= True
    g = s(_numberStr)
    for x in g:
        if str(mul(x)) in g and len(x)>1:
            result = False
            print(_numberStr+': ',result)
            return result
    print(_numberStr+': ',result)
    return result

is_colorful('236')
is_colorful('263')
is_colorful('542')


# d = []
# ar = []
# def re(_number,_str,_n):
#     if _number == 1:
#         # print(_str)
#         d.append(_str[:-1].split('.'))
#         return _str+'.'+str(_number+_n)
#     else:
#         for i in range(1,_number):
#             if len(_str[:-1].split('.'))>>1:
#                 d.append(_str[:-1].split('.'))
#             re(_number-i,_str+str(i+_n)+'.',i+_n)
#     return d
# re(5,'',0)  
# print("---------",d)

# def pr(_str,_arr):
#     result = []
#     for x in range(len(_arr)):
#         if x<(len(_arr)-1):
#             result.append(_str[int(_arr[x])-1:int(_arr[x+1])-1])
#             # print("----",_str[int(_arr[x])-1:int(_arr[x+1])-1])
#         # else:
#         #     result.append(_str[int(_arr[x])-1:])
#             # print("----",_str[int(_arr[x])-1:])
#     return result


# def cal(_string):
#     resu = []
#     re(len(_string),'',0)
#     for y in d:
#             # resu.append(pr(_string,y))

#             mul = 1
#             for x in y:
#                 mul = mul*int(x)
#             if str(mul) not in _string:
#                 resu.append(pr(_string,y))
#             else:
#                 print(mul)

#     print('--------------',resu)
#     return resu
# cal('236')