# import os
# import json

# # Define the base directory containing the JSON files
# base_dir = r"C:\Users\JackT\CodeLancs\React\PT_Web_App\src\exercises"

# # Initialize a set to store the unique 'equipment' values and a list for exercises
# unique_equipment_values = set()
# exercises_data = []

# # Walk through the directory
# for root, dirs, files in os.walk(base_dir):
#     for file in files:
#         # Check if the file is a JSON file
#         if file.endswith('.json'):
#             # Construct the full file path
#             file_path = os.path.join(root, file)
#             # Read the JSON file with 'utf-8' encoding specified
#             with open(file_path, 'r', encoding='utf-8') as f:
#                 data = json.load(f)
            
#             # Extract the 'equipment' value if it exists in the JSON data
#             equipment_value = data.get('equipment')
#             if equipment_value:
#                 unique_equipment_values.add(equipment_value)
            
#             # Extract all the relevant keys from the JSON data
#             exercise_info = {
#                 'name': data.get('name'),
#                 'force': data.get('force'),
#                 'level': data.get('level'),
#                 'mechanic': data.get('mechanic'),
#                 'equipment': data.get('equipment'),
#                 'primaryMuscles': data.get('primaryMuscles'),
#                 'secondaryMuscles': data.get('secondaryMuscles'),
#                 'instructions': data.get('instructions'),
#                 'category': data.get('category')
#             }
#             # Filter out any None values if the key does not exist in the JSON data
#             exercise_info = {k: v for k, v in exercise_info.items() if v is not None}
#             exercises_data.append(exercise_info)

# # Convert the set to a list and write the unique equipment values to a JSON file
# unique_equipment_list = list(unique_equipment_values)
# equipment_output_path = os.path.join(base_dir, 'unique_equipment.json')
# with open(equipment_output_path, 'w', encoding='utf-8') as f:
#     equipment_dicts = [{'id': equipment, 'label': equipment.capitalize()} for equipment in unique_equipment_list]
#     json.dump(equipment_dicts, f, indent=2)

# # Write the list of exercises with all their information to a JSON file
# exercises_output_path = os.path.join(base_dir, 'exercises.json')
# with open(exercises_output_path, 'w', encoding='utf-8') as f:
#     json.dump(exercises_data, f, indent=2)

# print(f"Unique equipment values have been written to {equipment_output_path}")
# print(f"Exercises data has been written to {exercises_output_path}")


import os
import json

# Define the base directory containing the JSON files
base_dir = r"C:\Users\JackT\CodeLancs\React\PT_Web_App\src\exercises"

# Initialize a set to store the unique 'equipment' values and a list for exercises
unique_equipment_values = set()
exercises_data = []

# Walk through the directory
for root, dirs, files in os.walk(base_dir):
    for file in files:
        # Check if the file is a JSON file
        if file.endswith('.json'):
            # Construct the full file path
            file_path = os.path.join(root, file)
            # Read the JSON file with 'utf-8' encoding specified
            with open(file_path, 'r', encoding='utf-8') as f:
                # Load the JSON data
                json_data = json.load(f)
                
                # Check if the JSON data is a list
                if isinstance(json_data, list):
                    # Iterate over each item in the list (each item should be a dictionary)
                    for data in json_data:
                        # Extract all the relevant keys from the JSON data
                        exercise_info = {
                            'name': data.get('name'),
                            'force': data.get('force'),
                            'level': data.get('level'),
                            'mechanic': data.get('mechanic'),
                            'equipment': data.get('equipment'),
                            'primaryMuscles': data.get('primaryMuscles'),
                            'secondaryMuscles': data.get('secondaryMuscles'),
                            'instructions': data.get('instructions'),
                            'category': data.get('category')
                        }
                        # Filter out any None values if the key does not exist in the JSON data
                        exercise_info = {k: v for k, v in exercise_info.items() if v is not None}
                        exercises_data.append(exercise_info)
                        
                        # Extract the 'equipment' value if it exists in the JSON data
                        equipment_value = data.get('equipment')
                        if equipment_value:
                            unique_equipment_values.add(equipment_value)

# Convert the set to a list and write the unique equipment values to a JSON file
unique_equipment_list = list(unique_equipment_values)
equipment_output_path = os.path.join(base_dir, 'unique_equipment.json')
with open(equipment_output_path, 'w', encoding='utf-8') as f:
    equipment_dicts = [{'id': equipment, 'label': equipment.capitalize()} for equipment in unique_equipment_list]
    json.dump(equipment_dicts, f, indent=2)

# Write the list of exercises with all their information to a JSON file
exercises_output_path = os.path.join(base_dir, 'AllValues.json')
with open(exercises_output_path, 'w', encoding='utf-8') as f:
    json.dump(exercises_data, f, indent=2)

print(f"Unique equipment values have been written to {equipment_output_path}")
print(f"Exercises data has been written to {exercises_output_path}")