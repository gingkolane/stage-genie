import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Icons of navigation tabs

const EverythingIcon_Tab = ({ selected }) => {
  return selected 
    ? <MaterialCommunityIcons name="view-dashboard" size={24} color="black" />
    : <MaterialCommunityIcons name="view-dashboard" size={24} color="grey" />;
};

const TodosIcon_Tab = ({ selected }) => {
  return selected 
    ? <MaterialIcons name="checklist" size={24} color="black" />
    : <MaterialIcons name="checklist" size={24} color="grey" />;
};

const MessagesIcon_Tab = ({ selected }) => {
  return selected 
    ? <AntDesign name="message1" size={24} color="black" />
    : <AntDesign name="message1" size={24} color="grey" />;
};

const LineNotesIcon_Tab = ({ selected }) => {
  return selected 
    ? <MaterialIcons name="notes" size={24} color="black" />
    : <MaterialIcons name="notes" size={24} color="grey" />;
};

const CostumesIcon_Tab = ({ selected }) => {
  return selected 
    ? <MaterialIcons name="notes" size={24} color="black" />
    : <MaterialIcons name="notes" size={24} color="grey" />;
};

const PropsIcon_Tab = ({ selected }) => {
  return selected 
    ? <MaterialIcons name="notes" size={24} color="black" />
    : <MaterialIcons name="notes" size={24} color="grey" />;
};

// Icons for botton Navigation bar
const StageIcon_BottomNav = ({ selected }) => {
  return selected 
    ? <MaterialCommunityIcons name="theater" size={24} color="black" />
    : <MaterialCommunityIcons name="theater" size={24} color="grey" />;
};

const CastCrewIcon_BottomNav = ({ selected }) => {
  return selected 
    ? <MaterialCommunityIcons name="account-group" size={24} color="black" />
    : <MaterialCommunityIcons name="account-group" size={24} color="grey" />;
};

const GenieIcon_BottomNav = ({ selected }) => {
  return selected 
    ? <MaterialCommunityIcons name="oil-lamp" size={24} color="black" />
    : <MaterialCommunityIcons name="oil-lamp" size={24} color="grey" />;
};

const PropCostumeIcon_BottomNav = ({ selected }) => {
  return selected 
    ? <FontAwesome name="masks-theater" size={24} color="black" />
    : <FontAwesome name="masks-theater" size={24} color="grey" />;
};

const DocumentIcon_BottomNav = ({ selected }) => {
  return selected 
    ? <MaterialCommunityIcons name="text-box-multiple" size={24} color="black" />
    : <MaterialCommunityIcons name="text-box-multiple" size={24} color="grey" />;
};

export { 
  StageIcon_BottomNav, CastCrewIcon_BottomNav, GenieIcon_BottomNav, PropCostumeIcon_BottomNav, DocumentIcon_BottomNav, 
  EverythingIcon_Tab, TodosIcon_Tab, MessagesIcon_Tab, LineNotesIcon_Tab, CostumesIcon_Tab, PropsIcon_Tab
};