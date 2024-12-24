#1
# def number_to_words(num):
#     num_dict = {
#         '0': 'zero',
#         '1': 'one',
#         '2': 'two',
#         '3': 'three',
#         '4': 'four',
#         '5': 'five',
#         '6': 'six',
#         '7': 'seven',
#         '8': 'eight',
#         '9': 'nine'
#     }

#     num_str = str(num)
#     words = [num_dict[digit] for digit in num_str]

#     return ' '.join(words)

# result = number_to_words(23056)
# print(result)

#2
# def rarest_word(text):
#     words = text.lower().split()

#     word_count = {}
    
#     for word in words:
#         if word in word_count:
#             word_count[word] += 1
#         else:
#             word_count[word] = 1
            
#     min_count = min(word_count.values())

#     rare_words = [word for word, count in word_count.items() if count == min_count]

#     return min(rare_words)

# input_text = input("Введите строку текста: ")
# result = rarest_word(input_text)
# print(result)

#3
# def fix_identifiers(identifiers):
#     # Разбиваем строку на идентификаторы
#     id_list = identifiers.split()
    
#     # Словарь для отслеживания количества вхождений
#     count_dict = {}
#     result = []

#     for identifier in id_list:
#         if identifier in count_dict:
#             count_dict[identifier] += 1
#             # Формируем новый идентификатор с постфиксом
#             new_identifier = f"{identifier}_{count_dict[identifier]}"
#             result.append(new_identifier)
#         else:
#             count_dict[identifier] = 1
#             result.append(identifier)

#     # Объединяем результат в строку
#     return ' '.join(result)

# # Пример использования
# input_identifiers = input("Введите строки-идентификаторы: ")
# result = fix_identifiers(input_identifiers)
# print(result)

#4
