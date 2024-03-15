import os
import json

# Define the base directory containing the JSON files
base_dir = r"C:\Users\JackT\CodeLancs\React\PT_Web_App\src\exercises"

# Initialize a set to store the unique 'equipment' values
unique_equipment_values = set()


# Walk through the directory
for root, dirs, files in os.walk(base_dir):
    for file in files:
        # Check if the file is a JSON file
        if file.endswith('.json'):
            # Construct the full file path
            file_path = os.path.join(root, file)
            # Read the JSON file with 'utf-8' encoding specified
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # ... [rest of the code]
            
            # Extract the 'equipment' value if it exists in the JSON data
            equipment_value = data.get('equipment')
            if equipment_value is not None:
                # Add the 'equipment' value to the set
                unique_equipment_values.add(equipment_value)

# Convert the set to a list if you need a list format
                unique_equipment_list = list(unique_equipment_values)

# Now `unique_equipment_list` contains all the unique 'equipment' values
                # ... [previous code]

# Convert the set to a list if you need a list format
unique_equipment_list = list(unique_equipment_values)

# Define the path for the output JSON file
output_file_path = os.path.join(base_dir, 'unique_equipment.json')

# Write the list of unique equipment values to a JSON file
with open(output_file_path, 'w', encoding='utf-8') as f:
    # Convert each equipment value to the required dictionary format
    equipment_dicts = [{'id': equipment, 'label': equipment.capitalize()} for equipment in unique_equipment_list]
    json.dump(equipment_dicts, f, indent=2)

print(f"Unique equipment values have been written to {output_file_path}")

##Unique equipment values have been written to C:\Users\JackT\CodeLancs\React\PT_Web_App\src\exercises\unique_equipment.json