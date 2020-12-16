using System;
using System.Collections.Generic;
using System.Linq;

namespace Dev.Nanday
{
    public static class NotificationCenter<TEnum> where TEnum : Enum
    {
        private static readonly Dictionary<TEnum, List<Action<object>>> _eventDictionary = CreateDictionary();

        public static void SubscribeToEvent(TEnum appEvent, Action<object> action) 
        {
            _eventDictionary[appEvent].Add(action);
        }

        public static void UnsubscribeToEvent(TEnum appEvent, Action<object> action)
        {
            _eventDictionary[appEvent].Remove(action);
        }

        public static void NotifyEventChanged(TEnum appEvent, object parameter)
        {
            foreach(var action in _eventDictionary[appEvent])
                action?.Invoke(parameter);
        }

        private static Dictionary<TEnum, List<Action<object>>> CreateDictionary()
        {
            var dictionary = new Dictionary<TEnum, List<Action<object>>>();
            foreach(TEnum enumElement in Enum.GetValues(typeof(TEnum)).Cast<TEnum>())
                dictionary[enumElement] = new List<Action<object>>>();
            return dictionary;
        }
    }
}